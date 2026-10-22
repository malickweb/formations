import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();
        const userQuery = messages[messages.length - 1].content.toLowerCase();

        // 1. Load knowledge base from JSON (RAG Light)
        const kbPath = path.join(process.cwd(), 'data/knowledge_base.json');
        const kbData = JSON.parse(fs.readFileSync(kbPath, 'utf8'));

        // 2. Simple Retrieval: Find chunks that contain keywords from the query
        // In a real RAG, we would use embeddings and cosine similarity.
        const relevantChunks = kbData.filter((chunk: any) => {
            const content = chunk.content.toLowerCase();
            // Check if any word in the query exists in the chunk
            const queryWords = userQuery.split(' ');
            return queryWords.some(word => word.length > 3 && content.includes(word));
        });

        const context = relevantChunks.length > 0
            ? relevantChunks.map((c: any) => c.content).join('\\n\\n')
            : 'Aucune information spécifique trouvée dans le catalogue.';

        const systemPrompt = `
            You are a helpful and professional customer support assistant for "FDW Formations", an online education platform.
            Your goal is to help potential students find the right course and answer their questions based ONLY on the provided knowledge base.

            Knowledge Base (Extracted from PDF):
            ${context}

            Instructions:
            - If the answer is not in the knowledge base, politely inform the user that you don't have that information and suggest contacting support via email.
            - Be concise and encouraging.
            - Always respond in French.
            - Use bullet points for features or lists.
            - Refer to the prices and durations exactly as mentioned in the context.
        `;

        const result = await streamText({
            model: openai('gpt-4o-mini'),
            system: systemPrompt,
            messages,
        });

        return result.toTextStreamResponse();
    } catch (error) {
        console.error('Chat API Error:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}

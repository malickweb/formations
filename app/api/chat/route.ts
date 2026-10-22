import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { products } from '@/data/formations';

export async function POST(req: Request) {
    try {
        const { messages } = await req.json();

        // Knowledge base string representation
        const knowledgeBase = products.map(p =>
            `Course: ${p.name}, Price: ${p.price}€, Level: ${p.level}, Duration: ${p.duration}, Description: ${p.description}, Features: ${p.features.join(', ')}`
        ).join('\n');

        const systemPrompt = `
            You are a helpful and professional customer support assistant for "FDW Formations", an online education platform.
            Your goal is to help potential students find the right course and answer their questions based ONLY on the provided knowledge base.

            Knowledge Base:
            ${knowledgeBase}

            Instructions:
            - If the answer is not in the knowledge base, politely inform the user that you don't have that information and suggest contacting support via email.
            - Be concise and encouraging.
            - Always respond in French.
            - Use bullet points for features or lists.
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

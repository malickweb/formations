const fs = require('fs');
const path = require('path');

async function ingestPDF() {
    // pdf-parse exporte parfois sa fonction principale différemment selon la version
    let pdf;
    try {
        const pdfModule = require('pdf-parse');
        pdf = typeof pdfModule === 'function' ? pdfModule : pdfModule.default;
    } catch (e) {
        console.error('Erreur chargement module pdf-parse:', e);
        return;
    }

    const pdfPath = path.join(__dirname, '../data/pdf/formations_fdw.pdf');
    const outputPath = path.join(__dirname, '../data/knowledge_base.json');

    console.log('Lecture du PDF...');
    const dataBuffer = fs.readFileSync(pdfPath);

    try {
        const data = await pdf(dataBuffer);
        const text = data.text;
        const chunks = text.split('\\n').filter(chunk => chunk.trim().length > 20);
        const knowledgeBase = chunks.map((content, index) => ({
            id: index,
            content: content.trim()
        }));
        fs.writeFileSync(outputPath, JSON.stringify(knowledgeBase, null, 2));
        console.log(`Ingestion terminée. ${chunks.length} segments sauvegardés dans ${outputPath}`);
    } catch (e) {
        console.error('Erreur lors du parsing du PDF:', e);
    }
}

ingestPDF().catch(console.error);

import "common.css";

function Entry(question, answer) {
    return (
        <>
            <h2>{question}</h2>
            <p>{answer}</p>
        </>
    );
}

export default function Faq() {
    const content = (
        <>
            <h1>FAQ</h1>
            {Entry(
                "What's the best way to provide feedback?",
                "If you have any feedback, feel free to email runeskovrup@gmail.com or reach out to Affinity on Discord."
            )}
        </>
    );

    return content;
}

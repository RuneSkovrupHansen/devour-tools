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
                "How did you make such an awesome site?",
                "Smashing my head on the keyboard repeatedly."
            )}
        </>
    );

    return content;
}

import "css/footer_link.css";

export function FooterLink(url, text) {
    return (
        <a href={url} className="footer_link">
            {text}
        </a>
    );
}

import "css/container.css";

/* Simple container component used by the Header and Footer components
to provide padding and spacing for nested components. */

export function Container(children, class_name = "container") {
    return <div className="container">{children}</div>;
}

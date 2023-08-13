import './Card.css';

export default function Card(props) {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}

// the "children" prop is a special prop that allows you to pass elements or components as children to
// another component. It enables you to create reusable and flexible components that can render dynamic 
// content within them. This concept is known as composition in React.
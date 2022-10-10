function Card({ children }) {
    return <div className='shadow rounded-lg overflow-hidden bg-white'>{children}</div>;
}

function Title({ children }) {
    return (
        <div className='p-4 border-b'>
            <h1 className='text-xl text-black font-semibold'>{children}</h1>
        </div>
    );
}
function Body({ children }) {
    return <div className='leading-relaxed p-4 text-black'>{children}</div>;
}
function Footer({ children }) {
    return <div className='bg-slate-50 p-4 text-black'>{children}</div>;
}
Card.Title = Title;
Card.Footer = Footer;
Card.Body = Body;

export default Card;

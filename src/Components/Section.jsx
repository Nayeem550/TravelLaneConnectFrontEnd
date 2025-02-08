function Section({ children, className }) {
    return (
        <section className={` px-2 py-2 ${className}`}>
            <div className=" max-w-screen-2xl mx-auto">{children}</div>
        </section>
    );
}

export default Section;

import Styles from "./hero.module.css"

export const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <h1 className="title">
                   Free profesional styling tips
                </h1>
                <h2 className="subtitle">
                Trust me, I'm a<s>n</s> <s>Engineer</s> styling professional
                </h2>
                <p>
                    <button className={Styles.btn}>Explore</button>
                    <button>Default button style</button>
                </p>
            </div>
        </div>
    );
};

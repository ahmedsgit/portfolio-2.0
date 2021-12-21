import Typewriter from "typewriter-effect";

const TextAnimationEffect = () => {
    return (
        <Typewriter
            options={ {
                autoStart: true,
                loop: true,
            } }
            onInit={ (typewriter) => {
                typewriter.typeString('Web - Developer')
                    .pauseFor(1000)
                    .deleteChars(9)
                    .typeString('Designer')
                    .deleteAll()
                    .pauseFor(1000)
                    .typeString('UI/UX Designer')
                    .pauseFor(1000)
                    .deleteAll()
                    .start();
            } }
        />
    )
}
export default TextAnimationEffect;
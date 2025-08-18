export default function Layout(props)
{
    const { children } = props
    const header = (
        <header>
            <h1 class = "text-gradient"> FitVerse </h1>
            <p>
                <strong> A place where you can find 30 workouts to keep you fit every month. </strong>
            </p>
        </header>
    )
    const footer = (
        <footer>
            <p>Created by <a href="https://www.instagram.com/ani_yaar_?igsh=MXZkeWJtM3JnajgxeQ==" target="_blank">Aniruddha</a></p>
            {/* <p>Created by <a href="https://www.instagram.com/ani_yaar_?igsh=MXZkeWJtM3JnajgxeQ==" target="_blank">Aniruddha Dutta</a> and <a href="https://www.instagram.com/_anuskaaparida_?igsh=ODFqd2tiamN5bjF6" target="_blank">Anuskaa Parida</a></p> */}
        </footer>
    )
    return(
        <>
            { header }
            { children }
            { footer }
        </>
    )
}

// export default function Layout(props) {

//     const { children } = props

//     const header = (
//         <header>
//             <h1 className="text-gradient">The Brogram</h1>
//             <p><strong>The 30 Simple Workouts Program</strong></p>
//         </header>
//     )

//     const footer = (
//         <footer>
//             <p>Built by <a href="https://www.smoljames.com" target="_blank">Smoljames</a><br />Styled with <a href="https://www.fantacss.smoljames.com" target="_blank">FantaCSS</a></p>
//         </footer>
//     )

//     //https://www,YOUR_USERNAME.netlify.app

//     return (
//         <>
//             {header}
//             {children}
//             {footer}
//         </>
//     )
// }
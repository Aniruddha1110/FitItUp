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

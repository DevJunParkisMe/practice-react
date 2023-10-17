const nav = (probs) => {
    return (
        <nav>
            <ul>
                <li><strong>대분류</strong></li>
            </ul>
            <ul>
                {probs.nav}
            </ul>
        </nav>
    )
}

export default nav

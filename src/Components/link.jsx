import useRouter from '../Hooks/UseRouter'

export default function Link ({href, children, ...restOfProps}) {
    const { navigateTo } = useRouter()

    const HandleClick = (event) => {
        event.preventDefault()
        navigateTo(href)
    }

    return (
        <a href={href} {...restOfProps} onClick={HandleClick}>
            {children}
        </a>
    )
}
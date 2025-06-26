import "./imagep.css"

export default function ImageP({ src, width, height }) {
    return (
        <img src={src} style={{ "width": width, "height": height }} />
    )
}

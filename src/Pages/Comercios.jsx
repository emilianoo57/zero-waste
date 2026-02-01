import ComercioListing from "../Components/ComercioListing"
import data from "../../data.json"
import ComerciosForm from "../Components/ComerciosForm"
export default function ComerciosAfiliados () {
    return (
        <>
        <ComerciosForm />
        <ComercioListing comercios={data} />
        </>
    )
}
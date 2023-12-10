import * as productService from "../../services/productService";
import { useState, useEffect } from "react";

export default function MyProducts({
    _ownerId
}) {
    const [showMyProduct, setShowMyPorduct] = useState([]);
    useEffect(() => {
        productService.getMyProduct(_ownerId)
            .then(result => setShowMyPorduct(result))
            .catch(err => console.log(err))
    }, []);


    return (
        <>
<div>{showMyProduct.product}</div>
        </>
    );
};
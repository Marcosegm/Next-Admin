import FormProduct from "@Components/FormProducts";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";
import axios from "axios";
import endPoints from "@Services/API";

export default function Edit() {
    const [product, setProducts] = useState({});
    const router = useRouter();
    useEffect(() => {
        const {id} = router.query;
        if (!router.isReady) return;
        async function getProduct(){
            const response = await axios.get(endPoints.products.getProduct(id))
            setProducts(response.data)
        }
        getProduct()
    },[router?.isReady])
    return <FormProduct product={product}/> 
}
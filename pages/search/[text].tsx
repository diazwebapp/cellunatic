import Head from "next/head";
import {GetServerSideProps,GetServerSidePropsContext} from 'next'
import { get_search } from "../../api/get_posts_controllers";
import { TGetPosts } from "../../interfaces/interfaces";
import { useMemo } from "react";
import Card_Item from "../../components/Card_item";
import { useRouter } from "next/dist/client/router";


type Props={
    accesorios:TGetPosts
    query:any
}

const Accesorios = ({accesorios,query}:Props) => {
    const {asPath,push} = useRouter()

    const more = ()=>{
        let limite = parseInt(query.limite) + 4
        if(limite <= accesorios.total_posts){            
            push("/search/"+query.text+"?limite="+limite+"#more")
        }
        if(limite > accesorios.total_posts){            
            push("/search/"+query.text+"?limite="+accesorios.total_posts+"#more")
        }
    }

    const items = useMemo(()=>{
        if(accesorios.posts){
            return <Card_Item posts_data={accesorios} />
        }
    },[accesorios])
    
    return (
        <main>
            <Head>
                <title>Cellunatic</title>
                <meta name="description" content="Cellunatic, tienda de accesorios, repuestos y servicio técnico profesional en dispositivos móviles, computadores y laptops" />
                <meta name="keywords" content="cellunatic, servicio tecnico a domicilio carabobo, servicio tecnico domicilio valencia, repuestos para telefonos, accesorios para telefonos"/>
                <link rel="canonical" href={process.env.DOMAIN+asPath} />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Cellunatic" />
                <meta property="og:description" content="Cellunatic, tienda de accesorios, repuestos y servicio técnico profesional en dispositivos móviles, computadores y laptops" />
                <meta property="og:url" content={process.env.DOMAIN+asPath} />
                <meta property="og:site_name" content="cellunatic.store" />
                <meta property="og:image" content={process.env.DOMAIN+"/logo512x512.png"} />
                <meta property="og:image:secure_url" content={process.env.DOMAIN+"/logo512x512.png"} />
                <meta property="og:image:width" content="32" />
                <meta property="og:image:height" content="32" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content="Cellunatic, tienda de accesorios, repuestos y servicio técnico profesional en dispositivos móviles, computadores y laptops" />
                <meta name="twitter:title" content="Cellunatic" />
                <meta name="twitter:image" content={process.env.DOMAIN+"/logo512x512.png"} />
                <link rel="shortlink" href={process.env.DOMAIN+asPath} />
            </Head>

            <section className="full_width">
                    <h2>Resultados de busqueda</h2>

                    
                       {items}
                    
                    <div id="more" >
                    {
                        !query.limite || query.limite < accesorios.total_posts?(
                            <button onClick={more} >Mas items</button>
                        ):null
                    }
                </div>
            </section>
            <style jsx>
                {
                    `
                        .container_detalles_item{
                            display:grid;
                            grid-template-columns:1fr;
                            gap:10px;
                        }
                        .container_detalles_item .imgs, .container_detalles_item .detalles{
                            background:var(--primary-color);
                            height:max-content;
                            border-radius:var(--radius);
                        }
                        .container_detalles_item .imgs{
                            text-align:center;
                            height:unset;
                            max-height:200px;
                        }
                        .container_detalles_item .imgs img{
                            width:100%;
                            height:100%;
                            object-fit:contain;
                        }
                        .container_detalles_item .detalles{
                            padding:10px;
                        }
                        @media(min-width:760px){
                            .container_detalles_item{
                                grid-template-columns:1fr 1fr;
                            } 
                        }
                    `
                }
            </style>
        </main>
    )
}
export const getServerSideProps:GetServerSideProps = async ({query}:GetServerSidePropsContext)=>{
    const {text,limite}:any = query
    parseInt(limite)
    const accesorios = await get_search({text,limite:limite?limite:12})
    return {props:{
            accesorios,
            query
        }}
}
export default Accesorios
import Head from 'next/head'
import {GetStaticProps,GetStaticPropsContext} from 'next'
import { TGetPost } from '../interfaces/interfaces'
import { useRouter } from 'next/dist/client/router'
import { get_post } from "../api/get_posts_controllers";

type Props={
    pagina:TGetPost
}

const ServicioTecnico = ({pagina}:Props) => {
    const {route} = useRouter()
    
    return (
        <main>
            <Head>
                <title>Servicio tecnico - Cellunatic</title>
                <meta name="description" content={pagina.post?pagina.post.meta_description:''} />
                <meta name="keywords" content={pagina.post?pagina.post.meta_keywords:''}/>
                <link rel="canonical" href={process.env.DOMAIN+route} />
                <meta property="og:locale" content="es_ES" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={pagina.post?pagina.post.titulo:'cellunatic'}/>
                <meta property="og:description" content={pagina.post?pagina.post.meta_description:''} />
                <meta property="og:url" content={process.env.DOMAIN+route} />
                <meta property="og:site_name" content={process.env.DOMAIN} />
                <meta property="og:image" content={pagina.post && pagina.post.cover?pagina.post.cover:process.env.DOMAIN+"/logo512x512.png"} />
                <meta property="og:image:secure_url" content={pagina.post && pagina.post.cover?pagina.post.cover:process.env.DOMAIN+"/logo512x512.png"} />
                <meta property="og:image:width" content="32" />
                <meta property="og:image:height" content="32" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:description" content={pagina.post?pagina.post.meta_description:''} />
                <meta name="twitter:title" content={pagina.post?pagina.post.titulo+' - Cellunatic':'Cellunatic'} />
                <meta name="twitter:image" content={pagina.post && pagina.post.cover?pagina.post.cover:process.env.DOMAIN+"/logo512x512.png"} />
                <link rel="shortlink" href={process.env.DOMAIN+route} />
            </Head>
            <section className="full_width" >
                <article className="banner" >
                    <img loading="lazy" src="/img/300.webp" alt="imagen servicio tecnico" />
                    
                    <div>
                        <h1 style={{ position: 'relative', textAlign: 'center' }}>Servicio T??cnico Profesional</h1>
                        <p>Solucion y detecci??n de fallas en telefonia m??vil, con la mejor atenci??n porque...</p>
                        <p><b>Somos gente que responde!</b></p>
                        <a href="#tag">
                            Ver m??s
                        </a>
                    </div>
                </article>
                
                <article id="tag">
                    <h2>Servicio T??cnico Hardware </h2>

                    <p >
                        Debido a que contamos con repuestos originales en stock, podemos asegurarte una r??pida y
                        especializada atenci??n, el precio de la reparaci??n de su tel??fono celular est?? directamente
                        ligado a la calidad de nuestros repuestos. Para ofrecerle la soluci??n acorde a tu problema
                        ponete en contacto para una atenci??n especializada. Algunas de las principales soluciones de
                        hardware para tu celular son:
                    </p>

                    <ol>
                        <li>
                            <p style={{ color: 'white' }}>Reparaci??n de Display y Pantallas t??ctiles</p>
                        </li>
                        <li>
                            <p style={{ color: 'white' }}>Problemas con el Cable Flex o C??mara</p>
                        </li>
                        <li>
                            <p style={{ color: 'white' }}>Cambio de Micr??fonos o Campanillas</p>
                        </li>
                        <li>
                            <p style={{ color: 'white' }}>Problemas con el PIN de carga o Cambio de Bater??a</p>
                        </li>
                        <li>
                            <p style={{ color: 'white' }}>Arreglo conectores USB y Soldado de Placas</p>
                        </li>

                        <li>
                            <p style={{ color: 'white' }}>Arreglo / Reemplazo de Parlantes</p>
                        </li>
                        <li>
                            <p style={{ color: 'white' }}>Problemas con los Botones</p>
                        </li>
                        <li>
                            <p style={{ color: 'white' }}>Soluci??n a tu equipo Mojado</p>
                        </li>
                        <li>
                            <p style={{ color: 'white' }}>y mucho m??s, consult??nos.</p>
                        </li>
                    </ol>
                </article>

                <article>
                    <h2>Servicio T??cnico Software</h2>
                    <p>
                        Si tienes problemas con la funcionalidad o el sistema operativo de tu celular. Contamos con el
                        Software necesario para realizar cualquier arreglo, dejando la funcionalidad del celular
                        operable al 100%. Algunas de las principales Soluciones de Software para tu celular son:
                    </p>

                    <ol>
                        <li>
                            <p style={{ color: 'white' }}>Downgrade, Actualizaci??n y Flasheo de Software o Firmware.</p>
                        </li>
                        <li>
                            <p style={{ color: 'white' }}>Configuraci??n o Instalaci??n de Aplicaciones, GPS, Utilidades y Juegos.</p>
                        </li>
                        <li>
                            <p style={{ color: 'white' }}>Configuramos tu celular para un correcto.</p>
                        </li>
                        <li>
                            <p style={{ color: 'white' }}>Reinstalaci??n del sistema operativo.</p>
                        </li>
                        <li>
                            <p style={{ color: 'white' }}>Arreglo conectores USB y Soldado de Placas</p>
                        </li>
                    </ol>

                    <p>
                        Liberaci??n y desbloqueo de tu tel??fono celular, realizado tanto por Software como por C??digo,
                        no comprometemos el tel??fono.
                    </p>
                </article>
                
            </section>
            <style jsx>
                {
                    `
                    article{
                        position:relative;
                    }
                    article > h2{
                        margin: 20px auto;
                        text-align:center;
                    }
                    .banner{
                        height:calc(100vh - var(--height-header));
                        max-height:580px;
                        postion:relative;
                    }
                    .banner > div{
                        position:absolute;
                        top:0;
                        left:0;
                        width:100%;
                        height:100%;
                        background:rgba(0,0,0, .6);
                        text-align:center;
                        display:grid;
                        place-items:center;
                        place-content:center;
                    }
                    .banner > div *{
                        color:white;
                        text-shadow:2px 2px var(--darken);
                    }
                    .banner > div p,.banner > div b,.banner > div a{
                        font-size:22px;
                        margin:20px 0;
                    }
                    .banner img{
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    }
                    article > p{
                        padding:20px 10px;
                    }
                    ol li{
                        margin:5px 0;
                    }
                    `
                }
            </style>
        </main>
    )
}

export const getStaticProps:GetStaticProps = async (_:GetStaticPropsContext)=>{
    const pagina =  await get_post({tipo:'pagina',url:'servicio-tecnico'})
    
    return {props:{
             pagina
         },revalidate:1}
}
export default ServicioTecnico
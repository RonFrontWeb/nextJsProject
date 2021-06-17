import Head from "next/head";
export const getStaticProps = async () => {

    // const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const res = await fetch('https://picsum.photos/v2/list?page=2&limit=10')
        const data = await res.json();

    return {
        props: { pictures:data}
    }

}


const Photos = ({pictures}) => {
    return ( 
        <>
        <Head>
            <title>Photo Blog | Gallery</title>
            <meta name="keyword" content="gallery" />
        </Head>
        <div>
            {pictures.map(picture => (
                // <div key={picture.albumId}>
                //     <a>
                //         <h3>{picture.title}</h3>
                //         <img src={picture.url} />
                //     </a>
                // </div>
                <div key={picture.id}>
                    <a>
                        <h3>{picture.author}</h3>
                        <img src={picture.url} />
                    </a>
                </div>
            ))}
            <h1>My Gallery</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum ipsa similique, ipsum mollitia fugiat dolorum quae, consequuntur atque accusamus quisquam voluptas eaque ipsam aspernatur incidunt! Ipsa, unde. Facere, animi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor illum ipsa similique, ipsum mollitia fugiat dolorum quae, consequuntur atque accusamus quisquam voluptas eaque ipsam aspernatur incidunt! Ipsa, unde. Facere, animi?</p>
        </div>
        </>
     );
}
 
export default Photos;
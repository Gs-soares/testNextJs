import Document, {Html, Main, Head, NextScript} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render(){
        return (
            <Html>
                <Head> 
                <link href="https://fonts.googleapis.com/css2?family=David+Libre:wght@700&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
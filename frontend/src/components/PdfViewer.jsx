import { useEffect, useRef } from 'react';

const PdfViewer = (props) => {
	const containerRef = useRef('');	
	useEffect(() => {
        const container = containerRef.current;
        let instance, PSPDFKit;
        (async function() {
            PSPDFKit = await import("pspdfkit");
            instance = await PSPDFKit.load({
            container,
            document: props.document,
            baseUrl: `${window.location.protocol}//${window.location.host}/${import.meta.env.BASE_URL}/`
            });
        })();
        return () => PSPDFKit && PSPDFKit.unload(container);
    }, []);
	return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
}

export default PdfViewer
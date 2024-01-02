// JANGAN DIAPUS, IMPORT PRELINE BIAR ANIMASI JALAN (KALO PAKE PRELINE)
const Preline = () => {
    const location = useLocation();

    useEffect(() => {
        import('preline/preline');
    }, []);

    useEffect(() => {
        // @ts-ignore
        HSStaticMethods.autoInit();
    }, [location.pathname]);

    return <></>;
};

export default Preline;
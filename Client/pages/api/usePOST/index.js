import instance from "../instance";

const usePOST = ({ path = "", body, config, setIsPOSTING, callback = () => {}, errorCallback = () => {} }) => {
    setIsPOSTING(true);
    instance
        .post(path, body, config)
        .then((res) => {
            callback(res.data);
            setIsPOSTING(false);
        })
        .catch((error) => {
            errorCallback(error);
            setIsPOSTING(false);
        });
};

export default usePOST;

import instance from "../instance";

const usePUT = ({
    path = "",
    body,
    config,
    setIsPUTTING,
    callback = () => {},
    errorCallback = () => {},
}) => {
    setIsPUTTING(true);
    instance
        .put(path, body, config)
        .then((res) => {
            callback(res.data);
            setIsPUTTING(false);
        })
        .catch((error) => {
            errorCallback(error);
            setIsPUTTING(false);
        });
};

export default usePUT;

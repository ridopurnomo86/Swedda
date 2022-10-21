import instance from "../instance";

const defaultConfig = {
    headers: {
        Authorization: `Bearer ${process.env.COOKIE_USER || "swedda_cust"}`,
    },
};

const useGET = ({
    path = "",
    config = defaultConfig,
    setIsFetching = () => {},
    callback = () => {},
    errorCallback = () => {},
}) => {
    setIsFetching(true);
    instance
        .get(path, config)
        .then((res) => {
            callback(res.data);
            setIsFetching(false);
        })
        .catch((error) => {
            errorCallback(error);
            setIsFetching(false);
        });
};

export default useGET;

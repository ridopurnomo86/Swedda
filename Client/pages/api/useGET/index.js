import instance from "../instance";

const useGET = ({ path = "", config, setIsFetching = () => {}, callback = () => {}, errorCallback = () => {} }) => {
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

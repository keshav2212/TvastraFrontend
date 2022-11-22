const API_HOST_LOCAL = "http://localhost:8080";

const UI_HOST_LOCAL = "https://localhost:3000";

const ENV_LOCAL = "local";

const HOSTS = {
    local: {
        "API": API_HOST_LOCAL,
        "UI": UI_HOST_LOCAL
    }
};

export const serviceUrl = () => {
    if(process.env.REACT_APP_ON_EC2 === "true") {
        console.log("Using public hostname and port");
        console.log(process.env.REACT_APP_PUBLIC_HOSTNAME_AND_PORT);
        return process.env.REACT_APP_PUBLIC_HOSTNAME_AND_PORT || ENV_LOCAL;
    }

    console.log("process.env.REACT_APP_ENVIRONMENT is ");
    console.log(process.env.REACT_APP_ENVIRONMENT);

    const environment = process.env.REACT_APP_ENVIRONMENT || ENV_LOCAL;
    return HOSTS[environment].API
};

export const urls = {
    service: serviceUrl()
};

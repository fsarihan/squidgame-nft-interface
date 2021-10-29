import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import ReactGA from "react-ga";

const useGaTracker = () => {

	const [initialized, setInitialized] = useState(false);

	useEffect(() => {
		if (!window.location.href.includes("localhost")) {
			ReactGA.initialize("G-1Y990174FG");
		}
		setInitialized(true);
	}, []);

	useEffect(() => {
		if (initialized) {
			ReactGA.pageview(window.location.pathname + window.location.search);
		}
	}, [initialized, window.location]);
};

export default useGaTracker;

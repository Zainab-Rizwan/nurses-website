import {Component, React} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MyRoutes} from "./routes";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient({
    defaultOptions: { queries: { staleTime: 1000 * 60 * 10 } },
});

export default class RouterConfig extends Component {
    render() {
        return (
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        {MyRoutes.map((route, i) => (
                            <Route
                                key={i}
                                path={route.path}
                                element={<route.layout><route.component /></route.layout>}
                            />
                        ))}
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        );
    }
}
  
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../exports/components.exports";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={} />
          <Route path="receipts" element={}>
            <Route path=":receiptId" element={} />
          </Route>
          <Route path="dashboard" element={} />
          <Route path="*" element={} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;

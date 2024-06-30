import { render } from "@testing-library/react";
import { describe, expect } from "vitest";
import Footer from "./Footer";

describe("Footer",()=>{
    //1 Check kalau footer beneran ke render
    it("should render Footer component", ()=>{
        const renderFooter = render(<Footer/>)

       expect(renderFooter).toBeDefined();
    });

 // 2. check behavior props footer/ check jika props message di render
 it("should render props message", async () => {
    const renderedFooter = await render(<Footer message="Footer Message" />);

   const propsMessage = await renderedFooter.findByTestId("props-message");
    
   expect(propsMessage).toHaveTextContent("hello World State");
});

 //3  check function button change message
 it("should change message when button clicked", async () => {
    const renderedFooter = await render(<Footer message="Footer Message" />);
 
   const stateMessage = await renderedFooter.findByTestId("state-message");
   expect(stateMessage).toHaveTextContent("Hello world");
 
   const btn = await renderedFooter.findByTestId("change-message-btn");
   // simulasi click button
   fireEvent.click(btn);
 
   await waitFor(() => {
     expect(stateMessage).toHaveTextContent("State Changed");
   })
  })


})
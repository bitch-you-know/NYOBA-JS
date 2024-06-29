import { render } from "@testing-library/react";
import { describe, expect } from "vitest";
import Footer from "./Footer";

describe("Footer",()=>{
    //1 Check kalau footer beneran ke render
    it("should render Footer component", ()=>{
        const renderFooter = render(<Footer/>)

       expect(renderFooter).toBeDefined();
    })
})
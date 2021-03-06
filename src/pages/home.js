import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";
import { HeaderContainer } from "../containers/header";
import { OptForm, Feature } from "../components";

export default function Home() {

    return (
      <>
        <HeaderContainer>
            <Feature>
            <Feature.Title>
              Unlimited Films, TV programmes and more.
            </Feature.Title>
            <Feature.SubTitle>
              Watch anywhere. Cancel at any time.
            </Feature.SubTitle>
            <OptForm>
              <OptForm.Input placeholder="Email Address" />
              <OptForm.Button>Try It now</OptForm.Button>
              <OptForm.Break />
              <OptForm.Text>
                Ready to watch? Enter your email to create or restart your
                membership
              </OptForm.Text>
            </OptForm>
          </Feature>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </>
    );
}
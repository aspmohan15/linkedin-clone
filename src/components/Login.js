import styled from "styled-components";
const Login = (props) => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg"></img>
        </a>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Wecome to your profiesonal community</h1>
          <img src="/images/login-hero.svg"></img>
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: 0 auto;
  padding: 12px 0 6px;
  display: flex;
  align-items: center;
  position: center;
  justify-content: space-between;
  flex-wrap: nowrap;

  & > a {
    width: 135px;
    height: 34px;
  }
  @media (max-width: 768px) {
    pading: 0 5px;
    width: 90%;
    margin: 0 auto;
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  padding: 10px 24px;

  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
  }
`;

const Section = styled.section`
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  width: 100%;
  max-width: 1128px;
  margin: auto;

  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`
  h1 {
    padding-bottom: 0;
    width: 60%;
    text-align: start;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;

    @media (max-width: 768px) {
      text-align: center;
      width: 100%;
      margin: 0 auto;
      font-size: 20px;
      text-align: center;
      justify-content: center;
    }
  }

  img {
    z-index: -1;
    width: 600px;
    height: 670;
    position: absolute;
    bottom: -70px;
    right: 0px;
    @media (max-width: 768px) {
      top: 200px;
      width: initial;
      position: initial;
      height: initial;
    }
  }
`;

const Form = styled.div`
  margin-top: 100px;
  width: 450px;
`;
const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 100%;
  border-radius: 50px;
  align-items: center;
  vertical-align: middle;
`;

export default Login;

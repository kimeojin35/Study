import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Add, LeftArrow, More } from "./src/res";
import styled from "styled-components/native";

export default function App() {
  return (
    <Container>
      <TopBar>
        <LeftArrow />
        <TopBarBox>
          <Add />
          <More />
        </TopBarBox>
      </TopBar>

      <MainContainer></MainContainer>

      <BottomBar>
        <BottomBarBox>
          <LabelLarge>타이머</LabelLarge>
        </BottomBarBox>
        <BottomBarBox>
          <LabelLarge>메트로놈</LabelLarge>
        </BottomBarBox>
      </BottomBar>
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.View`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Pretendard";
  display: flex;
  width: 100%;
  height: 100%;
  padding: 24px 0;
  flex-direction: column;
`;

const TopBar = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
  height: 48px;
  width: 100%;
  background-color: #ff0;
  flex-direction: row;
`;
const TopBarBox = styled.View`
  flex-direction: row;
  gap: 12px;
`;

const MainContainer = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 0;
  background-color: #ff0;
`;

const BottomBar = styled.View`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-direction: row;
  padding: 4px 10px;
`;

const BottomBarBox = styled.View`
  padding: 4px 10px;
`;

const HeadingLarge = styled.Text`
  font-size: 64px;
  font-weight: 800;
  line-height: 80px;
`;

const HeadingLMedium = styled.Text`
  font-size: 48px;
  font-weight: 700;
  line-height: 64px;
`;

const HeadingSmall = styled.Text`
  font-size: 40px;
  font-weight: 600;
  line-height: 52px;
`;

const TitleLarge = styled.Text`
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
`;

const titleMedium = styled.Text`
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`;

const TitleSmall = styled.Text`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
`;

const BodyLarge = styled.Text`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
`;

const BodyMedium = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
`;

const BodySmall = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
`;

const BodyTiny = styled.Text`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
`;

const LabelLarge = styled.Text`
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
`;

const LabelMedium = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

const LabelSmall = styled.Text`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`;

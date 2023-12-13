import { VStack } from "@chakra-ui/react";
import ExpertMobileItem from "./expertMobileItem";

export default function ExpertMobile() {
    return (
        <VStack spacing={"20px"}>
            <ExpertMobileItem
                image={require("../../assets/expert1.jpg")}
                text1="120여 명의 세무 전문가가"
                text2="기장부터 경영 자문까지"
                text3="분야별로 책임집니다."
                description="세무도 각 분야별 전문가에게 자문을 구하는 것이 가장
                    정확합니다. IOM은 세무기장, 경정청구, 조세불복, 세무조사
                    대응 등 각 분야별 전문가들이 한 팀으로 협업해 최적의
                    해결책을 제공하고 있습니다."
            />
            <ExpertMobileItem
                image={require("../../assets/expert2.jpg")}
                text1="세무 교육기관인"
                text2="IOM 아카데미에서"
                text3="전문가를 양성합니다."
                description="사람이 챙겨야 할 게 많은 세무 서비스에서 직원의 전문 역량은 무엇보다 중요합니다. IOM은 자체 교육기관인 IOM 아카데미를 설립해 최신 업무 지식과 업무 기술, 영업, 고객관리 등 체계적인 커리큘럼으로 전문가를 양성하고 교육하고 있습니다."
            />
            <ExpertMobileItem
                image={require("../../assets/expert3.jpg")}
                text1="자체 IT 연구소 IOM랩스를 운영,"
                text2="최고 수준의 IT 전문가들이"
                text3="함께합니다."
                description="세무법인 IOM의 기술을 책임지는 IOM랩스는 중소벤처기업부 선정 아기유니콘 기업, 유수의 투자사로부터 70억 투자 유치 등에 성공하며 기술력과 가능성을 입증받았습니다. 누구에게나 쉽고 편리한 세무를 만듭니다."
            />
        </VStack>
    );
}

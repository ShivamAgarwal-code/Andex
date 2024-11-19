import { useTranslation } from "@pancakeswap/localization";
import {
  isNativeIfoSupported,
  PROFILE_SUPPORTED_CHAIN_IDS,
} from "@pancakeswap/ifos";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/router";
import { useActiveChainId } from "hooks/useActiveChainId";
import {
  Flex,
  Button,
  useModalV2,
  ProfileAvatar,
  Text,
} from "@pancakeswap/uikit";
import { NextLinkFromReactRouter } from "@pancakeswap/widgets-internal";

import { NetworkSwitcherModal } from "./NetworkSwitcherModal";
import { useChainNames } from "../../../hooks/useChainNames";
import { WarningTips, LinkTitle, ContentText } from "../../WarningTips";

type Props = {
  saleFinished?: boolean;
};

export function ActivateProfileButton({ saleFinished }: Props) {
  const router = useRouter();
  const { chainId } = useActiveChainId();
  const profileSupported = useMemo(
    () => isNativeIfoSupported(chainId),
    [chainId]
  );
  const { t } = useTranslation();
  const { onOpen, onDismiss, isOpen } = useModalV2();
  const chainNames = useChainNames(PROFILE_SUPPORTED_CHAIN_IDS);
  const to = useMemo(() => "/create-profile", []);

  // FIXME: not sure why push got canceled after network switching. Need further investigation
  // It's a temp fix
  const goToProfilePage = useCallback(
    () => window.setTimeout(() => router.push(to), 0),
    [router, to]
  );

  const tips = (
    <Flex flexDirection="column" justifyContent="flex-start">
      <ProfileAvatar width={40} height={40} src="https://via.placeholder.com" />
      <Text mt="0.625rem">
        {t("Pancakeswap profile is needed for IFO public sale eligibility.")}
      </Text>
    </Flex>
  );

  const button = profileSupported ? (
    <Button as={NextLinkFromReactRouter} to={to} width="100%">
      {t("Activate your Profile")}
    </Button>
  ) : (
    <>
      <NetworkSwitcherModal
        isOpen={isOpen}
        supportedChains={PROFILE_SUPPORTED_CHAIN_IDS}
        title={t("Create Profile")}
        description={t("Create your Pancake Profile on %chain%", {
          chain: chainNames,
        })}
        buttonText={t("Switch chain to create profile")}
        onSwitchNetworkSuccess={goToProfilePage}
        onDismiss={onDismiss}
        tips={tips}
      />
      <Button width="100%" onClick={onOpen}>
        {t("Activate your Profile")}
      </Button>
    </>
  );

  return (
    <WarningTips
      action={button}
      title={
        <LinkTitle href="/ifo#ifo-how-to">{t("How to Take Part")} »</LinkTitle>
      }
      content={
        <ContentText>
          {saleFinished
            ? t("Activate Andex Profile to take part in next IFO.")
            : t("You need to create a profile to participate in the IFO.")}
        </ContentText>
      }
    />
  );
}

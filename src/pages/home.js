import React, { useState, useEffect } from "react";

// i18n imports
import { useTranslation } from "react-i18next";

// redux imports
import { benefitsDataSelector } from "../redux/selectors";
import { useSelector, useDispatch } from "react-redux";
import { getBenefits, getBenefitsCount } from "../redux/dispatchers/benefits";

// component imports
import { PageDescription } from "../components/atoms/PageDescription";
import { Title } from "../components/atoms/Title";
import { BenefitGrid } from "../components/organisms/BenefitGrid";

export function Home() {
  const [triedFetchedBenefitsCount, setTriedFetchBenefitsCount] = useState(
    false
  );
  const [triedFetchedBenefits, setTriedFetchedBenefits] = useState(false);

  // benefit redux subscriptions
  const isFetchingBenefits = useSelector(
    (state) => state.benefits.benefitsData.isFetching
  );
  const isFetchingBenefitsCount = useSelector(
    (state) => state.benefits.benefitsCount.isFetching
  );
  const fetchBenefitsFailed = useSelector(
    (state) => state.benefits.benefitsData.fetchFailed
  );
  const fetchBenefitsCountFailed = useSelector(
    (state) => state.benefits.benefitsCount.fetchFailed
  );
  const fetchBenefitsFailedReason = useSelector(
    (state) => state.benefits.benefitsData.fetchFailedReason
  );
  const fetchBenefitsCountFailedReason = useSelector(
    (state) => state.benefits.benefitsCount.fetchFailedReason
  );
  const benefitsCount = useSelector(
    (state) => state.benefits.benefitsCount.count
  );
  const benefitsData = useSelector(benefitsDataSelector);

  const { t } = useTranslation();

  //redux dispatch
  const dispatch = useDispatch();

  // effect to initially fetch count when component mounts
  useEffect(() => {
    if (
      !triedFetchedBenefitsCount &&
      !isFetchingBenefitsCount &&
      !fetchBenefitsCountFailed
    ) {
      dispatch(getBenefitsCount());
      setTriedFetchBenefitsCount(true);
    }
  }, [
    triedFetchedBenefitsCount,
    isFetchingBenefitsCount,
    fetchBenefitsCountFailed,
  ]);

  useEffect(() => {
    if (!triedFetchedBenefits && !isFetchingBenefits && !fetchBenefitsFailed) {
      dispatch(getBenefits(undefined, undefined, "created_at:asc"));
      setTriedFetchedBenefits(true);
    }
  }, [triedFetchedBenefits, isFetchingBenefits, fetchBenefitsFailed]);

  return (
    <div className="font-sans">
      <div className="m-auto">
        <Title dataCy={"home-page-title"}>{t("homePageTitle")}</Title>
      </div>
      <div className="text-2xl m-auto py-6 leading-none">
        <PageDescription dataCy={"home-page-description"}>
          {t("pageDescription")}
        </PageDescription>
      </div>
      <BenefitGrid
        benefitMoreInfoButtonText={t("benefitsMoreInformation")}
        nextPageButtonAriaLabel={t("benefitsNextPage")}
        previousPageButtonAriaLabel={t("benefitsPreviousPage")}
        numberOfPages={benefitsCount === 0 ? 1 : Math.ceil(benefitsCount / 3)}
        numberOfRows={1}
        benefits={benefitsData}
      />
    </div>
  );
}

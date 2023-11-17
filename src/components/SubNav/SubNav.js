"use client";
import {
  useSelectedLayoutSegment,
  useSelectedLayoutSegments,
  useParams,
} from "next/navigation";
import Link from "next/link";
import "./SubNav.css";

const SubNav = ({ params }) => {
  console.log("SubNav params", params);

  const nextParams = useParams();
  console.log("SubNav nextParams", nextParams);

  // get route: /marketing/promotion/create
  // if subpage is /promotion, then change subnav links
  const parentSegment = useSelectedLayoutSegment();
  const segments = useSelectedLayoutSegments();
  const currentSegment = segments[segments.length - 1];
  console.log("segments", segments);
  console.log("SubNav url parentSegment:", parentSegment);
  console.log("currentSegment", currentSegment);

  return (
    <div id="subnav">
      <div className="desktop-border">
        <div className="flex-wrapper">
          <div className="flex-wrapper-left">
            <div className="flex-row-always">
              {!parentSegment ? (
                <h1>Marketing</h1>
              ) : (
                parentSegment === "promotion" && (
                  <>
                    <Link href="/marketing" title="Back">
                      <span className="icon_back"></span>
                    </Link>

                    {currentSegment === "promotion" ? (
                      <h1>View</h1>
                    ) : (
                      <h1>Create</h1>
                    )}
                  </>
                )
              )}
            </div>
            {segments.length === 0 && (
              <ul>
                <li className="on">
                  <a href="#">Promotions</a>
                </li>
                <li>
                  <a href="#">Brand</a>
                </li>
                <li>
                  <a href="#">Reviews</a>
                </li>
              </ul>
            )}
          </div>

          <div className="flex-wrapper-right">
            <a href="#">
              <span className="icon_announcements"></span>
            </a>
            <a href="#">
              <span className="icon_profile"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubNav;

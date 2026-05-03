import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const Card = styled.div`
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  padding: 4px 12px;
  scroll-margin-top: 266px;

  &:not(:last-of-type) {
    margin-bottom: 24px;
  }
`;

/* This is pretty messy but it's styling for a fixed floating "table of contents"
 *
 * The top offset is calculated by the nav bar + h1 height + h1 margins + p height + p margin
 * The left offset is calculated by the page margins set in the Layout component, minus the width of
 *   the Sidebar component and its right margin (150px + 36px + 40px + 24px + 16px = 266px)
 */
const Sidebar = styled.div`
  position: fixed;
  width: 134px;
  margin-right: 16px;
  top: 266px;
  left: calc(25% - 150px);
  text-align: right;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const PlainList = styled.ul`
  list-style-type: none;
`;

const ToggleableItem = styled.li`
  ${(p) => p.active && "font-weight: bold;"}
`;

const metadata = {
  title: "Changelog | Kevin Zou",
  description: "A brief history of me disguised as patch notes",
  image: "https://kevinzou.xyz/meta-image.png",
};

const versionData = [
  {
    version: "v2.3.1",
    updates: [
      "moved to San Francisco",
      "settled into a new rhythm of life",
      "started seeking out new hobbies/interests (eg. bass guitar)",
    ],
    bugfixes: ["had job offer rescinded, fortunately found a new job"],
  },
  {
    version: "v2.2.2",
    updates: [
      "started a personal changelog to keep track of significant events in my life",
      "casually asked somebody to get lunch/dinner one-on-one (yes this was a big deal for me)",
      "have felt much more extraverted recently",
    ],
  },
  {
    version: "v2.2.1",
    updates: [
      "got my first full-time job offer!",
      "for the first time in a long time, felt content with life and how it was going",
    ],
  },
  {
    version: "v2.1.0",
    updates: [
      "became Development Director for nwPlus",
      "hosted some technical workshops on web dev and accessibility",
      "opened up to friends more",
      "started a band with friends!",
    ],
  },
  {
    version: "v2.0.0",
    updates: [
      "did my first co-op, which helped me get over my imposter syndrome and realize that I liked writing code as a career",
      "worked with Vue.js, Ruby on Rails, Cypress for the first time",
      "lived by myself for the first time in my life",
      "did my second co-op, where I was exposed to React and implemented SSO",
      "became President for UBC Esports",
      "became nwHacks Coordinator for nwPlus",
    ],
    bugs: ["bad at one-on-ones with my manager due to lack of preparation"],
  },
  {
    version: "v1.9.0",
    updates: [
      "travelled out of country for the first time on a 2 week solo trip to Japan",
      "joined nwPlus as Marketing Director",
      "became VP Human Resources for UBC Esports",
    ],
    bugs: [
      "developed a severe case of imposter syndrome",
      "was sometimes nervous holding conversations with people I'm not close to",
    ],
  },
  {
    version: "v1.8.0",
    updates: [
      "played in an ultimate frisbee league with new people, helping me realize people liked me for me",
      "joined UBC Esports as an event organizer",
    ],
    bugs: ["failed a course :')"],
  },
  {
    version: "v1.7.0",
    updates: ["graduated from high school and got accepted to UBC!"],
  },
  {
    version: "v1.6.0",
    updates: ["became the Student Council President at my high school"],
  },
  {
    version: "v1.2.0",
    updates: ["joined my high school's Student Council"],
  },
  {
    version: "v0.9.0",
    updates: ["learned how to play my first instrument :)"],
  },
];

export default function Changelog() {
  const [activeHeader, setActiveHeader] = useState("");

  // https://www.emgoto.com/react-table-of-contents/
  const useIntersectionObserver = (onIntersect) => {
    useEffect(() => {
      const callback = (elements) => {
        if (elements[0].isIntersecting) {
          onIntersect(elements[0].target.textContent);
        }
      };

      const observer = new IntersectionObserver(callback, {
        rootMargin: "-266px 0px -60% 0px",
      });

      const headings = Array.from(document.querySelectorAll("h3"));
      headings.forEach((element) => observer.observe(element));

      return () => observer.disconnect();
    }, []);
  };

  const VersionList = ({ activeHeader }) => {
    return (
      <PlainList>
        {versionData.map((versionData) => {
          const { version } = versionData;
          return (
            <ToggleableItem key={version} active={version === activeHeader}>
              <Link href={`#${version}`}>{version}</Link>
            </ToggleableItem>
          );
        })}
      </PlainList>
    );
  };

  useIntersectionObserver(setActiveHeader);

  return (
    <Layout>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta itemProp="name" content={metadata.title} />
        <meta itemProp="description" content={metadata.description} />
        <meta itemProp="image" content={metadata.image} />

        <meta property="og:url" content="https://kevinzou.xyz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />
      </Head>

      <h2>changelog</h2>
      <p>welcome to the changelog of my life :)</p>
      <Sidebar>
        <p>See notes for</p>
        <VersionList activeHeader={activeHeader} />
      </Sidebar>
      {versionData.map((data) => (
        <Card id={data.version} key={data.version}>
          <h3>{data.version}</h3>
          {data.updates && (
            <>
              <p>updates</p>
              <ul>
                {data.updates.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {data.bugfixes && (
            <>
              <p>bugfixes</p>
              <ul>
                {data.bugfixes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
          {data.bugs && (
            <>
              <p>bugs</p>
              <ul>
                {data.bugs.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </Card>
      ))}
    </Layout>
  );
}

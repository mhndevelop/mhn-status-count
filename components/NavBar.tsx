"use client";

import { NavItem } from "@/types";
import Link from "next/link";
import styled from "styled-components";

const NavBarButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const NavButton = styled.div<{ $isActive: boolean }>`
  border-radius: 4px;
  border: 1px solid ${(props) => (props.$isActive ? "#c90" : "#fff")};
  color: ${(props) => (props.$isActive ? "#c90" : "#fff")};
  padding: 12px 18px;
`;

const NavBar = (props: { activeItem: NavItem }) => {
  return (
    <>
      <nav id="main-nav">
        <NavBarButtonList>
          <li>
            <Link href="/doc">
              <NavButton $isActive={props.activeItem === NavItem.Poison}>
                독
              </NavButton>
            </Link>
          </li>
          <li>
            <Link href="/pok">
              <NavButton $isActive={props.activeItem === NavItem.Blast}>
                폭파
              </NavButton>
            </Link>
          </li>
          <li>
            <Link href="/sum">
              <NavButton $isActive={props.activeItem === NavItem.Sleep}>
                수면
              </NavButton>
            </Link>
          </li>
        </NavBarButtonList>
      </nav>
    </>
  );
};

export default NavBar;

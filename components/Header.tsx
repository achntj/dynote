import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const {data: session, status} = useSession();

  let left = (
    <div>
      <Link href="/">
        <a className="bold" data-active={isActive("/")}>
          Notes
        </a>
      </Link>
  
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div>
        <Link href="/">
          <a className="bold" data-active={isActive("/")}>
            Notes
          </a>
        </Link>
      </div>
    );
    right = (
      <div>
        <p>Validating session ...</p>
      </div>
    );
  }

  if (!session) {
    right = (
      <div>
        <Link href="/api/auth/signin">
          <a data-active={isActive("/signup")}>Log in</a>
        </Link>
      </div>
    );
  }

  if (session) {
    left = (
      <div className="space-x-2">
        <Link href="/">
          <a data-active={isActive("/")}>
            Notes
          </a>
        </Link>
        <Link href="/drafts">
          <a data-active={isActive("/drafts")}>Drafts</a>
        </Link>
      </div>
    );
    right = (
      <div className="space-x-2">
        <Link href="/create">
          <button>
            <a>New post</a>
          </button>
        </Link>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>        
      </div>
    );
  }

  return (
    <nav className="flex justify-between p-2">
      {left}
      {right}
    </nav>
  );
};

export default Header;

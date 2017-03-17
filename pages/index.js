import Link from "next/link";
export default () => (
  <div>
    <p>Click the link below, watch the 404 flicker</p>
    <Link href={`/v/somewhere/`} prefetch>
      <a>/v/somewhere</a>
    </Link>
  </div>
);

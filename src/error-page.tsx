import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';

export default function ErrorPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-[#F26838] lg:text-9xl">500</h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-[#F26838]">
            Looks like you&apos;ve encountered a pesky bug
          </p>
          <p className="mb-4 text-lg font-normal text-[#3AB881]">
            Sorry about that! Please try again later or visit our homepage to get where you need to go
          </p>

          <Button
            className="bg-[#F26838] font-normal text-white"
            href="/"
            radius="full"
            as={Link}
            variant="solid"
          >
            Take me there!
          </Button>
        </div>
      </div>
    </section>
  );
}

# Momo Vendor Onboarding(MoveOn)

MoveOn allows you to onboard Mobile Money merchants with ease!

## Prerequisites

- React
- NextJS
- TypeScript
- Vanilla Extract

## Getting Started

### Clone the repository
```bash
git clone https://github.com/j33n/moveon.git
```

### Install dependencies

Ensure you have switched in the directory with project files, then:
```bash
npm install
```

### Running the development server:

```bash
npm run dev
```

### Starting the Application

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Existing phone numbers to test with

- ```250780312345```
- ```250720312346```
- ```250781312347```

You can find our placeholder storage in [./app/data](./app/data)

## Improvements

### Storage

This project uses JSON to store objects to store data, this means that there are limitations to what you can do, so to deploy in a production environment ensure you switch to a database storage first.

Find this [Prisma, NextJS database setup guide](https://www.prisma.io/nextjs) for reference

### Code persistance

Some of the data such as a Momo code is not being persisted after being generated, switching to a database would allow you to perform READ/WRITE functionalities with ease thus persisting the code as well.

### UI/UX improvement

The UI/UX is decent but there's a lot of room for improvement.

### Approval process

In the real world this project would need integration with a telecom company since ideally a code has to be approved by system administrators before it can be operational.

### Testing

This project would need at least minimal integration testing to boost the developer's confidence core functionalities would work in the real world.

## Important Licensing Note

This project is protected under specific licensing terms that prohibit its use in a commercial setting.

### Attention to Contributors, Reviewers and Collaborators

Before considering the use of this code, it's imperative to understand that using it for commercial purposes or within any commercial product can harm my prior relationships and could lead to legal implications.

This is a showcase of my skillset and should be treated as such. It's not meant for commercial deployment or any revenue-generating venture.

Please refer to the [LICENSE.md](./LICENSE.md) file for detailed licensing terms. Any unauthorized use of this code is strictly prohibited.

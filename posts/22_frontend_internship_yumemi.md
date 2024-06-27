---
Status: Published # 'Draft', 'Pending', 'Published-Portfolio', 'Published-Medium', 'Rewriting'
docType: Article # 'Project', 'Article'
id: 22
title: 1 Day Frontend Internship at Yumemi
description: AA
slug: frontend_internship_yumemi
date: 2024-6-24
author: Shoto Morisaki
image: post/logo_yumemi.svg
category: Project
tags: [React, frontend, mac, pnpm]
relatedDoc1: 
relatedDoc2: 
relatedDoc3: 
relatedDoc4: 
relatedDoc5: 
editor_img: https://raw.githubusercontent.com/shoot649854/IMG_DB/main/profile.webp
editor_bio: Computer Science @ University of California Santa Cruz | Intern @ LiNK
editor_name: Shoto Morisaki
editor_social:
  -
    icon: fab fa-linkedin
    url: https://www.linkedin.com/in/shoto-morisaki-93b0a71bb/
  -
    icon: fab fa-github
    url: https://github.com/shoot649854/
  -
    icon: fab fa-portfolio
    url: https://portfolio-shoto.vercel.app/
---

This internship was completely remote, and yet the learning experience was so great that I would like to share it with you. First of all, what made this internship different from other experiences was that I was able to learn directly from a mentor, who was a mentor in a team of three. The students were asked to

**1. Adherence to Naming Conventions**

Clarity in function naming is crucial for maintainable code. A well-named function serves as self-documentation, revealing its purpose and methodology at a glance. Unfortunately, the programming world often encounters ambiguous function names or ones that rely excessively on external libraries, complicating code readability and adaptability. To mitigate this, developers should adhere to naming conventions that reflect the function's behavior and its return type, ensuring that the codebase remains intuitive and flexible for modifications and future upgrades.


```typescript
// before
const translateAnimalKindArray = (animalKind: AnimalKind[]): string => {
  return animalKind.reduce((accumulator, current) => {
    if (accumulator === '') return translateAnimalKindText(current);
    return `${accumulator}、${translateAnimalKindText(current)}`;
  }, '');
};
```

```typescript
// after
const translateAnimalKindArray = (animalKind: AnimalKind[]): string => {
  const translatedText = animalKind.map((kind) =>
    translateAnimalKindText(kind),
  );
  const joinText = '、';
  return translatedText.join(joinText);
};
```

**2. Employment of Custom Hooks in Front-End Development**

Front-end development should prioritize user interface and user experience, relegating data handling and backend interactions to a secondary role. The utilization of custom hooks emerges as a practical solution when backend services are unreliable or when the data format is unpredictable. Custom hooks encapsulate data fetching and state management logic, allowing front-end components to remain clean and focused solely on presentation and user interaction. This approach not only streamlines the development process but also enhances the robustness of the application by isolating the UI from data processing complexities.

```typescript
// before
export const AnimalCard: FC<AnimalCardProps> = ({ animaId }) => {
  const { data: animalDetail } = useAnimalDetailQuery(animaId);
  const [animal, setAnimal] = useState<Animal | null>(null);

  if (isNullish(animalDetail)) {
  useEffect(() => {
    const getAnimal = async () => {
      return fetch(animalAPIPath(String(animaId)))
        .then((res) => res.json())
        .then((data) => setAnimal(data as Animal)); // たぶんAnimalだから大丈夫だと思う
    };
    void getAnimal();
  }, [animaId]);
```

```typescript
// after
export const AnimalCard: FC<AnimalCardProps> = ({ animaId }) => {
  const { data: animalDetail } = useAnimalDetailQuery(animaId);
```

**3. Leveraging Libraries for Optimization**

To further optimize front-end performance, various libraries and tools can be instrumental. For instance:

- **Toolkit**: This library aids in optimizing the front-end by identifying and eliminating unused packages and unnecessary dependencies. It streamlines the application, reducing load times and improving overall performance.

- **Google Chrome Inspect**: A vital tool for developers, Google Chrome Inspect allows for the inspection of loaded resources within an application. It identifies unused packages and extraneous dependencies, and it can also pinpoint unnecessary CSS files that burden the load time.

For maintaining code quality, particularly in spelling and syntax within code editors, the **C Spelling extension in VS Code** is recommended. This tool is invaluable in large-scale development environments where even minor errors in spelling or syntax can propagate further issues in the codebase.

By integrating these practices and tools, developers can significantly enhance both the efficiency and reliability of their code, leading to robust, scalable, and maintainable software solutions.

```typescript

```
import useSWR from 'swr';

import {create} from 'shared/utils/date';

import {Event} from 'modules/events/models';

const events: Event[] = [
  {
    title: "Workshop Weekend",
    description:
      "Workshop Weekend Time! We will provide a lot of workshops with different topics the whole weekend! The perfect time to close the skills gap between your current level and the skills you need to finish your project succesfully. Registration is open until this Friday 11:59am!.",
    date: create("2020-12-12").toString(),
    tags: ["workshops"],
    link: "https://bln.techlabs.org/timeline/",
  },
  {
    title: "Final Event",
    description:
      "In our Final Event we will revisit your TechLabs journey this semester, present your project work and celebrate your collaborative learning effort together! After a short introduction, each group has the chance to present their elevator pitch to their fellow participants. Afterwards we'll have a short feedback round as well as a Q&A. Please make sure that at least one member of your team is available to present your project and answer questions.",
    date: create("2020-02-11").toString(),
    tags: ["projects"],
    link: "https://bln.techlabs.org/timeline/",
  },
];

const fetchEvents = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(events);
    }, 5000);
  }) as Promise<Event[]>;

export const useEvents = () => {
  const { data } = useSWR("/events", fetchEvents, { suspense: true });

  return { events: data! };
};

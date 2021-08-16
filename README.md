# SOLID_REST_API
SOLID is a popular set of design principles that are used in object-oriented software development. SOLID is an acronym that stands for five key design principles: single responsibility principle, open-closed principle, Liskov substitution principle, interface segregation principle, and dependency inversion principle. All five are commonly used by software engineers and provide some important benefits for developers.

In this study, we created with Rocketseat a REST API using Node.js, Typescript and a storing the data in a temporary variable, being able to create a user and send test emails with a higher level of abstraction. In this approach, the code is more flexible, agile, and reusable, as these abstractions work regardless of which low-level modules was implemented.

#NOTES
I relocated the controller to a separated folder and updated the uuiv4 dependency to uuid, putting in the implementations of repositories folder. It makes more sense in a SOLID design because entities are part of the innermost layer of the architecture and they shouldn't depend on anything around it.

References: https://www.youtube.com/watch?v=vAV4Vy4jfkc

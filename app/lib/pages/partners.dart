import 'package:flutter/material.dart';
import 'package:hack_n_heal/uikit/annotation.dart';
import 'package:hack_n_heal/uikit/title.dart';

class Partners extends StatefulWidget {
  const Partners({Key? key}) : super(key: key);

  @override
  State<Partners> createState() => _PartnersState();
}

class _PartnersState extends State<Partners> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const AppTitle().iconTitle('Partners', context),
        ),
        body: ListView(
          children: [
            Annotation().grey(
                'People who have contributed to helping people with ACE'),
          ],
        )
    );
  }
}

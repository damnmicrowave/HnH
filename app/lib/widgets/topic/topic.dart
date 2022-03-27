import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hack_n_heal/blocs/threads_cubit.dart';
import 'package:hack_n_heal/models/threads.dart';
import 'package:hack_n_heal/uikit/annotation.dart';
import 'package:hack_n_heal/uikit/loading.dart';
import 'package:hack_n_heal/uikit/title.dart';
import 'package:hack_n_heal/widgets/thread/thread_card.dart';

class Topic extends StatefulWidget {
  const Topic({Key? key}) : super(key: key);

  @override
  State<Topic> createState() => _TopicState();
}

class _TopicState extends State<Topic> {
  @override
  void initState() {
    super.initState();

    final topicsCubit = context.read<ThreadsCubit>();
    if (topicsCubit.state?.objects == null) {
      topicsCubit.loadThreads();
    }
  }

  @override
  Widget build(BuildContext context) {
    Map arguments = ModalRoute.of(context)?.settings.arguments as Map;

    return BlocBuilder<ThreadsCubit, ThreadsModel?>(builder: (context, state) {
      if (state?.objects == null) {
        return const AppLoading();
      }

      return Scaffold(
          appBar: AppBar(title: const AppTitle().iconTitle('', context)),
          body: ListView(children: [
            Annotation().grey('${arguments['title']}'),
            ...state!.objects.map((thread) => ThreadCard(
                  id: thread.id,
                  username: thread.author.username,
                  datetime: thread.datetime,
                  name: thread.name,
                ))
          ]));
    });
  }
}

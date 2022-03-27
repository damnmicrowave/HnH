import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hack_n_heal/blocs/topics_cubit.dart';
import 'package:hack_n_heal/models/topics.dart';
import 'package:hack_n_heal/uikit/annotation.dart';
import 'package:hack_n_heal/uikit/loading.dart';

import 'package:hack_n_heal/uikit/title.dart';
import 'package:hack_n_heal/widgets/topic/topic_card.dart';

class Topics extends StatefulWidget {
  const Topics({Key? key}) : super(key: key);

  @override
  State<Topics> createState() => _TopicsState();
}

class _TopicsState extends State<Topics> {
  @override
  void initState() {
    super.initState();

    final topicsCubit = context.read<TopicsCubit>();
    if (topicsCubit.state?.objects == null) {
      topicsCubit.loadTopics();
    }
  }

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<TopicsCubit, TopicsModel?>(
      builder: (context, state) {
        if (state?.objects == null) {
          return const AppLoading();
        }

        return Scaffold(
          appBar: AppBar(title: const AppTitle().iconTitle('Topics', context)),
          body: ListView(
            children: [
              Annotation().grey('Key areas of discussion'),
              ...state!.objects.map((topic) => TopicCard(
                    title: topic.name,
                    id: topic.id,
                  ))
            ],
          ),
        );
      },
    );
  }
}
